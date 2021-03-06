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
import { V1ComponentCondition, V1ObjectMeta } from './';
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
 * @export
 * @interface V1ComponentStatus
 */
export interface V1ComponentStatus {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ComponentStatus
     */
    apiVersion?: string;
    /**
     * List of component conditions observed
     * @type {Array<V1ComponentCondition>}
     * @memberof V1ComponentStatus
     */
    conditions?: Array<V1ComponentCondition>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ComponentStatus
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1ComponentStatus
     */
    metadata?: V1ObjectMeta;
}
export declare function V1ComponentStatusFromJSON(json: any): V1ComponentStatus;
export declare function V1ComponentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ComponentStatus;
export declare function V1ComponentStatusToJSON(value?: V1ComponentStatus | null): any;
