# coding: utf-8
"""Simple HTTP Server.

This module builds on BaseHTTPServer by implementing the standard GET
and HEAD requests in a fairly straightforward manner.

"""


__version__ = "0.6"

__all__ = ["SimpleHTTPRequestHandler"]

import os
import posixpath
import BaseHTTPServer
import urllib
import cgi
import sys
import shutil
import mimetypes
import SocketServer
import urlparse
import json
try:
    from cStringIO import StringIO
except ImportError:
    from StringIO import StringIO

GIT_TOKEN = "9f9b9af638da7618513935357b52399b"

class TagHandler(object):
    def __init__(self, data, header):
        self.data = data
        self.header = header

    def get_ref(self):
        return self.data.get("ref").split('/')[-1]

    def get_kind(self):
        return self.header.get("X-Gitlab-Event")

    def is_tag_push(self):
        return self.get_kind() == "Tag Push Hook"

    def get_token(self):
        return self.header.get("X-Gitlab-Token")

    def is_gitlab_token(self):
        return self.get_token() == GIT_TOKEN

    def check(self):
        if all([self.is_gitlab_token(), self.is_tag_push(), self.get_ref()]):
            return True
        return False

    def run(self):
        if self.check():
            # os.system("nohup sh /opt/webBuild/web_build.sh %s >> /tmp/aa.log &" % self.get_ref())
            print("日志记录在/tmp/aa.log里")


class HTTPSeverHandler(BaseHTTPServer.BaseHTTPRequestHandler):
    def do_GET(self):
        self._do(self.path)

    def do_POST(self):
        if self.path == "/gitlab":
            handle = TagHandler(self.getBody(), self.headers)
            handle.run()
            data = {"code": 0, "message": ""}
        else:
            header = {}
            for (i, j) in self.headers.items():
                header[i] = j
            data = {
                "path": self.path,
                "header": header,
                "data": self.getBody()
            }
        
        
        self._do(json.dumps(data))

    def getBody(self):
        result = {}
        datas = self.rfile.read(int(self.headers.get("content-length")))

        types = self.headers.get("content-type", "").lower()
        if types.find("application/json") > -1:
            result = json.loads(datas)    
        elif types.find("application/x-www-form-urlencoded") > -1:
            for item in datas.split("&"):
                key, value = item.split("=")
                result[key] = value
        else:
            result = datas
        return result

    def _do(self, message):
        self.send_response(200)
        self.send_header("content-type", "application/json")
        self.send_header("Content-Length", str(len(message)))
        self.end_headers()
        self.wfile.write(message)


def test(HandlerClass = HTTPSeverHandler,
         ServerClass = BaseHTTPServer.HTTPServer):
    BaseHTTPServer.test(HandlerClass, ServerClass)


if __name__ == '__main__':
    test()