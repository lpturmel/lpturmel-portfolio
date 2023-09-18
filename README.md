# Louis-Philippe's website

## Running locally

### Installing dependencies (to install Tailwind + DaisyUI)

```
yarn install 
```

### Styles

Run 

```
npx tailwindcss -i ./input.css -o ./style/output.css --watch
```

### Dev server

Install trunk

```
cargo install trunk
```

Launch the dev server

```
trunk serve --open
```

### Building

Run 

```
trunk build --release
```
