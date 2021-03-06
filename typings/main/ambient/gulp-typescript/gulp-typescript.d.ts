// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/5e960679e6f9ae6ce905b1db0ad36fc189cd2eca/gulp-typescript/gulp-typescript.d.ts
// Type definitions for gulp-typescript
// Project: https://github.com/ivogabe/gulp-typescript
// Definitions by: Asana <https://asana.com>, Thomas Corbière <https://github.com/tomc974>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "gulp-typescript" {
    function GulpTypescript(params?: GulpTypescript.Params, filters?: GulpTypescript.FilterSettings, reporter?: GulpTypescript.Reporter): GulpTypescript.CompilationStream;

    module GulpTypescript {
        export function createProject(params?: Params): Project;
        export function createProject(file: string, params?: Params): Project;
        export function filter(filters: FilterSettings): CompilationStream;
        interface Params {
            declarationFiles?: boolean;
            module?: string;
            noEmitOnError?: boolean;
            noExternalResolve?: boolean;
            noImplicitAny?: boolean;
            noLib?: boolean;
            removeComments?: boolean;
            sourceRoot?: string; // use gulp-sourcemaps instead
            sortOutput?: boolean;
            target?: string;
            typescript?: any;
            outFile?: string;
            outDir?: string;
            suppressImplicitAnyIndexErrors?: boolean;
            jsx?: string;
            declaration?: boolean;
            emitDecoratorMetadata?: boolean;
            experimentalAsyncFunctions?: boolean;
            moduleResolution?: string;
            noEmitHelpers?: boolean;
            preserveConstEnums?: boolean;
            isolatedModules?: boolean;
        }

        interface TsConfig {
            files?: string[];
            exclude?: string[];
            compilerOptions?: any;
        }

        interface Project {
            config: TsConfig;
            src(): NodeJS.ReadWriteStream;
        }

        interface FilterSettings {
            referencedFrom?: string[];
        }

        interface Reporter {
            error(error: any): void;
        }

        interface CompilationStream extends NodeJS.ReadWriteStream {
            dts: NodeJS.ReadWriteStream;
            js: NodeJS.ReadWriteStream;
        }

        module reporter {
            function nullReporter(): Reporter;
            function defaultReporter(): Reporter;
            function fullReporter(showFullFilename?: boolean): Reporter;
        }
    }

    export = GulpTypescript;
}