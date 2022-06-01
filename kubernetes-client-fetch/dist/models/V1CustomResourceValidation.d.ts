/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { V1JSONSchemaProps } from './';
/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 * @export
 * @interface V1CustomResourceValidation
 */
export interface V1CustomResourceValidation {
    /**
     *
     * @type {V1JSONSchemaProps}
     * @memberof V1CustomResourceValidation
     */
    openAPIV3Schema?: V1JSONSchemaProps;
}
export declare function V1CustomResourceValidationFromJSON(json: any): V1CustomResourceValidation;
export declare function V1CustomResourceValidationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceValidation;
export declare function V1CustomResourceValidationToJSON(value?: V1CustomResourceValidation | null): any;