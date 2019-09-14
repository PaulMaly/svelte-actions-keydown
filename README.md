# svelte-actions-keydown

Keydown events action plugin for [Svelte 3](https://svelte.dev). [Demo](https://svelte.dev/repl/5e9a477ebfbb479d8fb5b06272e30362?version=3.12.1)

## Usage

Install with npm or yarn:

```bash
npm install --save svelte-actions-keydown
```

```html
<svelte:window on:enter={submit} on:esc={cancel} />

<script>
  import { enter, esc } from 'svelte-actions-keydown';

  function submit() {
    alert('Enter pressed');
  }

  function cancel() {
    alert('Esc pressed');
  }
</script>
```

## License

MIT &copy; [PaulMaly](https://github.com/PaulMaly)
