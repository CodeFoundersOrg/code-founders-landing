import { defineConfig } from 'tinacms';

const branch = 'main';

export default defineConfig({
  branch,
  clientId: '2577917c-c54f-412a-933d-10657d0d06c0', // Get this from tina.io
  token: '2996bda0f6067ec3e184fc60f40a7250a189b357', // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'assets',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        label: 'Home Content',
        name: 'home_content',
        path: 'src/content/home',
        format: 'md',
        templates: [
          {
            fields: [
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true,
                description: 'Title of methodiek section',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: {
                  component: 'textarea',
                },
                required: true,
                description: 'Description of methodiek section',
              },
              {
                type: 'string',
                name: 'button_text',
                label: 'Button Text',
                required: true,
                description: 'Text of the navigation button',
              },
              {
                type: 'string',
                name: 'button_navigation',
                label: 'Button Navigation',
                required: true,
                description:
                  'Where to navigate to by clicking the button, e.g. /opleidingen or /contact',
              },
              {
                type: 'string',
                name: 'unique_id',
                label: 'Unique ID',
                required: true,
                description:
                  'Do Not Edit!! The site uses this unique identifier in order to put the content in the right place. If you edit, it must be edited in the site code as well.',
              },
            ],
            label: 'home-methodiek',
            name: 'home_methodiek',
          },
          {
            fields: [
              {
                type: 'string',
                name: 'slogan',
                label: 'Slogan',
                description:
                  'Wrap into <span style="color: var(--color-primary-green);"></span>; if you want part of the slogan in green.',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                description: 'Intro description',
                ui: {
                  component: 'textarea',
                },
                required: true,
              },
              {
                type: 'string',
                name: 'button_text',
                label: 'Button text',
                description: 'Text of the action button',
                required: true,
              },
              {
                type: 'string',
                name: 'button_navigation',
                label: 'Button Navigation',
                description:
                  'Page to navigate to, for the action button. E.g. /opleidingen or /contact',
                required: true,
              },
              {
                type: 'string',
                name: 'unique_id',
                label: 'Unique ID',
                required: true,
                description:
                  'Do Not Edit!! The site uses this unique identifier in order to put the content in the right place. If you edit, it must be edited in the site code as well.',
              },
            ],
            label: 'intro',
            name: 'intro',
          },
          {
            fields: [
              {
                type: 'string',
                name: 'pitch_button_text',
                label: 'Pitch - Button text',
                description: 'Text inside the button in the pitch section',
              },
              {
                type: 'string',
                name: 'pitch_button_navigation',
                label: 'Pitch - Button Navigation',
                description: `Where to navigate to from the pitch action button, e.g. /opleidingen
                or /contact`,
              },
              {
                type: 'string',
                name: 'unique_id',
                label: 'Unique ID',
                required: true,
                description: `Do Not Edit!! The site uses this unique identifier
                in order to put the content in the right place. If you edit, it must be edited
                in the site code as well.`,
              },
            ],
            label: 'pitch-action-button',
            name: 'pitch_action_button',
          },
          {
            fields: [
              {
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true,
                description:
                  'Heading of the pitch part. Wrap into <span style="color: var(--color-primary-green);"></span>; if you want part of the heading in green.',
              },
              {
                type: 'string',
                name: 'pitch_part_description',
                label: 'Pitch part description',
                description: 'Pitch part description',
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
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true,
                description:
                  'Heading of the pitch section. Wrap into <span style="color: var(--color-primary-green);"></span>; if you want part of the heading in green.',
              },
              {
                type: 'string',
                name: 'unique_id',
                label: 'Unique ID',
                required: true,
                description: `Do Not Edit!! The site uses this unique identifier
                in order to put the content in the right place. If you edit, it must be edited
                in the site code as well.`,
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
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            description:
              'Wrap into <span style="color: var(--color-primary-green);"></span>; if you want part of the heading in green.',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            description: 'Introduction / description text for Teams page',
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
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            description: 'Name of the founder',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            description: 'Description of this founder',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'photo',
            label: 'Photo',
            description: 'Photo of the founder',
          },
          {
            label: 'Technologies',
            name: 'technologies',
            type: 'object',
            description:
              'List of technologies this person can give trainings in',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.name}` };
              },
            },
            fields: [
              {
                label: 'Name',
                name: 'name',
                type: 'string',
                required: true,
                description: 'Name of the Technology, for example "JavaScript"',
              },
              {
                label: 'Logo',
                name: 'logo',
                type: 'string',
                description: `For now we use material icon theme, so please pick from this list:
                https://github.com/PKief/vscode-material-icon-theme/tree/main/icons. Make sure to omit ".svg" extension. So if you want Javascript, the right value
                is "javascript"`,
              },
              {
                label: 'Logo upload',
                name: 'logo_upload',
                type: 'image',
                description: `If logo does not already exist in the repository, upload your own.
                Make sure background is transparent (e.g. .png or .svg file)`,
              },
            ],
          },
          {
            label: 'Socials',
            name: 'socials',
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.social}` };
              },
            },
            fields: [
              {
                label: 'Social',
                name: 'social',
                type: 'string',
                required: true,
                options: ['LinkedIn', 'Facebook', 'Twitter', 'YouTube'],
                description: 'Social media platform of choice',
              },
              {
                label: 'Link',
                name: 'link',
                type: 'string',
                required: true,
                description: 'Link to your profile/channel',
              },
            ],
          },
          {
            type: 'number',
            name: 'order',
            label: 'Order',
          },
        ],
      },
      {
        label: 'Opleidingen Page',
        name: 'opleidingen_page',
        path: 'src/content/opleidingen',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            required: true,
            description:
              'Heading text of the Opleidingen page. Wrap into <span style="color: var(--color-primary-green);"></span>; if you want part of the heading in green.',
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            description: 'Description text of Opleidingen page',
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
        format: 'md',
        fields: [
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
            description:
              'Whether it is a draft, hidden from readers in the overview but visitable if you have the URL',
          },
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            required: true,
            description: 'Titel van de opleiding, e.g. Python + RaspberryPi',
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Description',
            description: 'Short description of the service',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'hero',
            label: 'Hero image',
            description: 'Hero image of the service',
          },
          {
            type: 'string',
            name: 'hero_alt',
            label: 'Hero alt',
            description: `Alternative text for the image, in case it doesn't load or for visually
            impaired users to be able to understand what the image describes.`,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          {
            type: 'string',
            name: 'layout',
            label: 'Layout',
            description: 'Astro layout used for this file',
            required: true,
          },
        ],
      },
      {
        label: 'Contact',
        name: 'contact',
        path: 'src/content/contact',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'heading',
            label: 'Heading',
            required: true,
            description:
              'Wrap into <span style="color: var(--color-primary-green);"></span>; if you want part of the heading in green.',
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
