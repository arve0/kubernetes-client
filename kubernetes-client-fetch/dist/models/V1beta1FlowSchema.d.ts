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
import { V1ObjectMeta, V1beta1FlowSchemaSpec, V1beta1FlowSchemaStatus } from './';
/**
 * FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
 * @export
 * @interface V1beta1FlowSchema
 */
export interface V1beta1FlowSchema {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1FlowSchema
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1FlowSchema
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1beta1FlowSchema
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1beta1FlowSchemaSpec}
     * @memberof V1beta1FlowSchema
     */
    spec?: V1beta1FlowSchemaSpec;
    /**
     *
     * @type {V1beta1FlowSchemaStatus}
     * @memberof V1beta1FlowSchema
     */
    status?: V1beta1FlowSchemaStatus;
}
export declare function V1beta1FlowSchemaFromJSON(json: any): V1beta1FlowSchema;
export declare function V1beta1FlowSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1FlowSchema;
export declare function V1beta1FlowSchemaToJSON(value?: V1beta1FlowSchema | null): any;
