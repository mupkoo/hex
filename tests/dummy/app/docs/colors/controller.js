import Controller from '@ember/controller';

export default class extends Controller {
  grays = [
    'white',
    'gray-100',
    'gray-200',
    'gray-300',
    'gray-400',
    'gray-500',
    'gray-600',
    'gray-700',
    'gray-800',
    'gray-900',
    'black',
  ];

  colors = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'];

  // prettier-ignore
  theme = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ];
}
