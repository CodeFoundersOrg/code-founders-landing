import { defineConfig } from 'tinacms';

const branch = 'tinacms';

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: 'public/assets',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public/assets',
    },
  },
  schema: {
    collections: [
      {
        label: 'Home Content',
        name: 'home_content',
        path: 'src/content/home',
        templates: [
          {
            fields: [
              {
                type: 'rich-text',
                name: 'body',
                label: 'Body of Document',
                description: 'This is the markdown body',
                isBody: true,
              },
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: {
                  component: 'textarea',
                },
                required: true,
              },
              {
                type: 'string',
                name: 'button_text',
                label: 'Button Text',
                required: true,
              },
              {
                type: 'string',
                name: 'button_navigation',
                label: 'Button Navigation',
                required: true,
              },
              {
                type: 'string',
                name: 'unique_id',
                label: 'Unique ID',
                required: true,
              },
            ],
            label: 'home-methodiek',
            name: 'home_methodiek',
          },
          {
            fields: [
              {
                type: 'rich-text',
                name: 'body',
                label: 'Body of Document',
                description: 'This is the markdown body',
                isBody: true,
              },
              {
                type: 'string',
                name: 'slogan',
                label: 'Slogan',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: {
                  component: 'textarea',
                },
                required: true,
              },
              {
                type: 'string',
                name: 'button_text',
                label: 'Button text',
                required: true,
              },
              {
                type: 'string',
                name: 'button_navigation',
                label: 'Button Navigation',
                required: true,
              },
              {
                type: 'string',
                name: 'unique_id',
                label: 'Unique ID',
                required: true,
              },
            ],
            label: 'intro',
            name: 'intro',
          },
          {
            fields: [
              {
                type: 'rich-text',
                name: 'body',
                label: 'Body of Document',
                description: 'This is the markdown body',
                isBody: true,
              },
              {
                type: 'string',
                name: 'pitch_button_text',
                nameOverride: 'pitch-button_text',
                label: 'Pitch - Button text',
              },
              {
                type: 'string',
                name: 'pitch_button_navigation',
                nameOverride: 'pitch-button_navigation',
                label: 'Pitch - Button Navigation',
              },
              {
                type: 'string',
                name: 'unique_id',
                label: 'Unique ID',
                required: true,
              },
            ],
            label: 'pitch-action-button',
            name: 'pitch_action_button',
          },
          {
            fields: [
              {
                type: 'rich-text',
                name: 'body',
                label: 'Body of Document',
                description: 'This is the markdown body',
                isBody: true,
              },
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true,
              },
              {
                type: 'string',
                name: 'pitch_part_description',
                label: 'Pitch part description',
                ui: {
                  component: 'textarea',
                },
                required: true,
              },
            ],
            label: 'pitch-part',
            name: 'pitch_part',
          },
          {
            fields: [
              {
                type: 'rich-text',
                name: 'body',
                label: 'Body of Document',
                description: 'This is the markdown body',
                isBody: true,
              },
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true,
              },
              {
                type: 'string',
                name: 'unique_id',
                label: 'Unique ID',
                required: true,
              },
            ],
            label: 'pitch-title',
            name: 'pitch_title',
          },
        ],
      },
      {
        label: 'Team',
        name: 'team',
        path: 'src/content/team',
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
      {
        label: 'Founders',
        name: 'founders',
        path: 'src/content/founders',
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
        ],
      },
      {
        label: 'Opleidingen Page',
        name: 'opleidingen_page',
        path: 'src/content/opleidingen',
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
      {
        label: 'Opleidingen',
        name: 'opleidingen',
        path: 'src/pages/opleidingen',
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
          },
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            required: true,
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'hero',
            label: 'Hero image',
          },
          {
            type: 'string',
            name: 'hero_alt',
            label: 'Hero alt',
          },
          {
            type: 'string',
            name: 'layout',
            label: 'Layout',
            required: true,
          },
        ],
      },
      {
        label: 'Contact',
        name: 'contact',
        path: 'src/content/contact',
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
            required: true,
          },
          {
            type: 'string',
            name: 'email',
            label: 'Email',
            required: true,
          },
        ],
      },
    ],
  },
});
