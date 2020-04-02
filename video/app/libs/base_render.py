from mako.lookup import TemplateLookup
from django.template import RequestContext
from django.conf import settings
from django.template.context import Context
from django.http import HttpResponse

def render_to_response(request,template,data=None):
    context_instance = RequestContext(request)
    path = settings.TEMPLATES[0]