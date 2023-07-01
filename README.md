# React-auto-component-ts

`React-auto-component-ts` is a powerful tool that allows you to effortlessly generate React components in TypeScript (.tsx) and SCSS (Sass) format, all with a simple command-line interface. Say goodbye to manual component creation and embrace the efficiency of this fantastic package!

## Installation

To install `React-auto-component-ts`, run the following command:
`npm install react-auto-component-ts`

## Configuration

After installation, you need to manually add a
`"gc": "node node_modules/react-auto-component-ts/generate_component/index.js"`
property to the `"scripts"` object in the `package.json` file in the root of your project.

Example:

```json
"scripts": {
		"dev": "vite",
		"build": "vite build",
		"lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
		"preview": "vite preview",
		"gc": "node node_modules/react-auto-component-ts/generate_component/index.js"
	},
...

```

## Usage

To generate a component using `React-auto-component-ts`, run the following command in the root of your project:

`npm run gc MyComponent`

Replace MyComponent with the name of your desired component. It should be written in camelCase or PascalCase.

## Important

If the src/components directory does not exist, fear not! React-auto-component-ts will create it automatically for you before generating the requested component.

## Example Usage

Let's create a component called Card:

`npm run gc Card`

The React-auto-component-ts will do its magic and create the following directory structure:

```
/src
  /components
    /Card
      Card.tsx
      Card.scss
      index.ts
```

The contents of the generated files will be as follows:

Card.tsx

```typescript
import './${name}.scss';

// type ${name}Props = {} Add your props type

const ${name} = (): JSX.Element => {
  return (
    <div className="${name}">Hello 👋, I am a ${name} component.</div>
  );
};

export default ${name};
```

Card.scss

```css
.Card {
	/* add your styles here */
}
```

index.tsx

```typescript
import Card from "./Card";

export default Card;
```

Make sure to specify the component name as an argument to the gc command.

## Link to repository

https://github.com/PeppeTll/React-auto-component-ts.git

## Link to linkedin

https://www.linkedin.com/in/peppetll/
