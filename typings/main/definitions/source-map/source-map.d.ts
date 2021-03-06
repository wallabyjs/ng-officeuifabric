// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/typed-typings/npm-source-map/86c25e7a550d5af7a63d979625602c17cce157f6/lib/source-map-consumer.d.ts
declare module 'source-map/lib/source-map-consumer' {
export interface StartOfSourceMap {
  file?: string;
  sourceRoot?: string;
}

export interface RawSourceMap extends StartOfSourceMap {
  version: string;
  sources: Array<string>;
  names: Array<string>;
  sourcesContent?: string[];
  mappings: string;
}

export interface Position {
  line: number;
  column: number;
}

export interface MappedPosition extends Position {
  source: string;
  name?: string;
}

export interface MappingItem {
  source: string;
  generatedLine: number;
  generatedColumn: number;
  originalLine: number;
  originalColumn: number;
  name: string;
}

export class SourceMapConsumer {
  public static GENERATED_ORDER: number;
  public static ORIGINAL_ORDER: number;

  constructor(rawSourceMap: RawSourceMap);
  public originalPositionFor(generatedPosition: Position): MappedPosition;
  public generatedPositionFor(originalPosition: MappedPosition): Position;
  public sourceContentFor(source: string): string;
  public eachMapping(callback: (mapping: MappingItem) => void, context?: any, order?: number): void;
}
}

// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/typed-typings/npm-source-map/86c25e7a550d5af7a63d979625602c17cce157f6/lib/source-map-generator.d.ts
declare module 'source-map/lib/source-map-generator' {
import { StartOfSourceMap, SourceMapConsumer } from 'source-map/lib/source-map-consumer'

export interface Mapping {
  generated: Position;
  original: Position;
  source: string;
  name?: string;
}

export class SourceMapGenerator {
  constructor(startOfSourceMap?: StartOfSourceMap);
  public static fromSourceMap(sourceMapConsumer: SourceMapConsumer): SourceMapGenerator;
  public addMapping(mapping: Mapping): void;
  public setSourceContent(sourceFile: string, sourceContent: string): void;
  public applySourceMap(sourceMapConsumer: SourceMapConsumer, sourceFile?: string, sourceMapPath?: string): void;
  public toString(): string;
}
}

// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/typed-typings/npm-source-map/86c25e7a550d5af7a63d979625602c17cce157f6/lib/source-node.d.ts
declare module 'source-map/lib/source-node' {
import { SourceMapConsumer, MappedPosition, StartOfSourceMap } from 'source-map/lib/source-map-consumer'
import { SourceMapGenerator } from 'source-map/lib/source-map-generator'

export interface CodeWithSourceMap {
  code: string;
  map: SourceMapGenerator;
}

export class SourceNode {
  constructor();
  constructor(line: number, column: number, source: string);
  constructor(line: number, column: number, source: string, chunk?: string, name?: string);
  public static fromStringWithSourceMap(code: string, sourceMapConsumer: SourceMapConsumer, relativePath?: string): SourceNode;
  public add(chunk: string): void;
  public prepend(chunk: string): void;
  public setSourceContent(sourceFile: string, sourceContent: string): void;
  public walk(fn: (chunk: string, mapping: MappedPosition) => void): void;
  public walkSourceContents(fn: (file: string, content: string) => void): void;
  public join(sep: string): SourceNode;
  public replaceRight(pattern: string, replacement: string): SourceNode;
  public toString(): string;
  public toStringWithSourceMap(startOfSourceMap?: StartOfSourceMap): CodeWithSourceMap;
}
}

// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/typed-typings/npm-source-map/86c25e7a550d5af7a63d979625602c17cce157f6/source-map.d.ts
declare module 'source-map/source-map' {
export * from 'source-map/lib/source-map-consumer'
export * from 'source-map/lib/source-map-generator'
export * from 'source-map/lib/source-node'
}
declare module 'source-map' {
export * from 'source-map/source-map';
}