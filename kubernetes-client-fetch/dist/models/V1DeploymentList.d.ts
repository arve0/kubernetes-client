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
import { V1Deployment, V1ListMeta } from './';
/**
 * DeploymentList is a list of Deployments.
 * @export
 * @interface V1DeploymentList
 */
export interface V1DeploymentList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1DeploymentList
     */
    apiVersion?: string;
    /**
     * Items is the list of Deployments.
     * @type {Array<V1Deployment>}
     * @memberof V1DeploymentList
     */
    items: Array<V1Deployment>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1DeploymentList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof V1DeploymentList
     */
    metadata?: V1ListMeta;
}
export declare function V1DeploymentListFromJSON(json: any): V1DeploymentList;
export declare function V1DeploymentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeploymentList;
export declare function V1DeploymentListToJSON(value?: V1DeploymentList | null): any;
