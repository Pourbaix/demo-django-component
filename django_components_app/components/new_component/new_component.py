from django_components import component

@component.register("new_component")
class NewComponent(component.Component):
    template_name = "new_component/new_component.html"
    def get_context_data(self, main_title, description, comment, owner):
        return {
            "main_title": main_title,
            "description": description,
            "comment": comment,
            "owner": owner,
        }
    
    class Media:
        css = "new_component/new_component.css"
        js = "new_component/new_component.js"

