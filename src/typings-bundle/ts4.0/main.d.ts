// Minimum TypeScript Version: 4.0

// @ts-expect-error -- TypeScript complains about a conflict with the type definition in /ts3.3/main.d.ts
declare module 'hexedit' {
	type A = any;
	type B = any;
	type C = any;
	type D = any;
	type E = any;
	type F = any;
	type G = any;

	export type H = any;
}
