from django.shortcuts import render
from django.views.generic import TemplateView, View
from django.template import Context, Template
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json

class MainPage(TemplateView):
    template_name = "django_components_app/mainPage.html"


@method_decorator(csrf_exempt, name = "dispatch")
class SimpleComponentTests(View):
    # Test a simple component that is just using the {% component %} tag and no slots or nesting
    # Takes the name of the component and the context to pass to it
    base_template = "django_components_app/base_template.html" 

    def post(self, request):
        context_data = json.loads(request.body)["config"]["context"]["args"]
        template = json.loads(request.body)["template_name"]
        context_tag = {"component_tag": Template((self.generateTag(context_data, template))).render(Context(context_data))}
        return render(request, self.base_template, context=context_tag)
    
    def generateContext(self, context_data):
        context_string = ""
        for element in context_data:
            context_string += str(element) + "=" + element + " "
        return context_string
    
    def generateTag(self, context_data, template):
        context_string = self.generateContext(context_data)
        component_name = template
        return ('{% load component_tags %}{% component ' + "'" + component_name + "' " + context_string + ' %}')

@method_decorator(csrf_exempt, name = "dispatch")
class AdvancedComponentTests(View):
    # Test a more complex component with slots or component nesting
    # Takes a template to render and the context to pass to it 
    base_template = ""

    def post(self, request):
        context_data = json.loads(request.body)["config"]["context"]["args"]
        template = json.loads(request.body)["template_name"]
        if(template):
            self.base_template = template
        return render(request, self.base_template, context=context_data)
