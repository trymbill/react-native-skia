import type { Shader } from "../Shader";
import type { SkJsiInstane } from "../JsiInstance";
import type { Matrix } from "../Matrix";

export interface SkSLUniform {
  columns: number;
  rows: number;
  /** The index into the uniforms array that this uniform begins. */
  slot: number;
}

export interface RuntimeEffect extends SkJsiInstane<"RuntimeEffect"> {
  /**
   * Returns a shader executed using the given uniform data.
   * @param uniforms
   * @param isOpaque
   * @param localMatrix
   */
  makeShader(
    uniforms: number[],
    isOpaque?: boolean,
    localMatrix?: Matrix
  ): Shader;

  /**
   * Returns a shader executed using the given uniform data and the children as inputs.
   * @param uniforms
   * @param isOpaque
   * @param children
   * @param localMatrix
   */
  makeShaderWithChildren(
    uniforms: number[],
    isOpaque?: boolean,
    children?: Shader[],
    localMatrix?: Matrix
  ): Shader;

  /**
   * Returns the nth uniform from the effect.
   * @param index
   */
  getUniform(index: number): SkSLUniform;

  /**
   * Returns the number of uniforms on the effect.
   */
  getUniformCount(): number;

  /**
   * Returns the total number of floats across all uniforms on the effect. This is the length
   * of the uniforms array expected by makeShader. For example, an effect with a single float3
   * uniform, would return 1 from `getUniformCount()`, but 3 from `getUniformFloatCount()`.
   */
  getUniformFloatCount(): number;

  /**
   * Returns the name of the nth effect uniform.
   * @param index
   */
  getUniformName(index: number): string;
}