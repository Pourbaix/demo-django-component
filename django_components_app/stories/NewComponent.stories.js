import { Pattern } from 'storybook-django/src/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect, jest } from "@storybook/jest"

import template from "../components/new_component/new_component.html"

export default {
  title: 'django_components/NewComponent',
  parameters: { 
    docs: {
      source: {
        code: template,
      }
    },     
    layout: 'centered',
  },
//   tags: ['autodocs'],
  argTypes: {
	main_title: {
        control: {
            type: "text",
        },
        description: "Main object",
        table: {
            type: {
              summary: 'string',
            },
        },
    },
    description: {
        control: {
            type: "text",
        },
        description: "Description of the object",
        table: {
            type: {
              summary: 'string',
            },
        },
    },
    comment: {
        control: {
            type: "text",
        },
        description: "Additionnal comment about the object",
        table: {
            type: {
              summary: 'string',
            },
        },
    },
    owner: {
        control: {
            type: "text",
        },
        description: "Name of the owner for this object",
        table: {
            type: {
              summary: 'string',
            },
        },
    },
  },
};

export const Standard = (args) => (
  <Pattern
    template="new_component"
    context={{ args }}
    endpoint="/django_components/simpleComponentTests"
  />
);

Standard.args = {
    main_title: "Panneaux solaires",
    description: "Économique et durable",
    comment: "Installés",
    owner: "Chris",
};

Standard.play = async ({ args, canvasElement }) => {
    const canvas = within(await canvasElement);
    // Creating a mock to see if the alert displays 
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {console.log("Alert triggered")});

    // Testing if the component renders correctly 
    expect(await canvas.findAllByText("Panneaux solaires")).toHaveLength(1);
    expect(await canvas.findAllByText("Économique et durable")).toHaveLength(1);
    expect(await canvas.findAllByText("Installés")).toHaveLength(1);
    expect(await canvas.findAllByText("No image provided")).toHaveLength(1);

    // Finding the button and triggering a click event on it
    const button = await canvas.findByText("Demande");
    await userEvent.click(button);
    expect(alertMock).toHaveBeenCalled();

    // Unmock so we can still see the alert if we manually click on the 'Demande' button 
    alertMock.mockRestore();
};

export const Advanced = (args) => (
    <Pattern
        template="django_components_app/new_component_advanced.html"
        context={{ args }}
        endpoint="/django_components/advancedComponentTests"
    />
);

Advanced.args = {
    main_title: "Peinture moderne",
    description: "Chère, d'artiste renommé",
    comment: "Un peu d'usure",
    owner: "David",
    image_slot: '<img src="static/django_components_app/image.jpg" alt="Object picture" class="image_descr" />'
};