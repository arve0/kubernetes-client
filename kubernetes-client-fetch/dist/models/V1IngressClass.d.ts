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
import { V1IngressClassSpec, V1ObjectMeta } from './';
/**
 * IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
 * @export
 * @interface V1IngressClass
 */
export interface V1IngressClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1IngressClass
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1IngressClass
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1IngressClass
     */
    metadata?: V1ObjectMeta;
    /**
     *
     * @type {V1IngressClassSpec}
     * @memberof V1IngressClass
     */
    spec?: V1IngressClassSpec;
}
export declare function V1IngressClassFromJSON(json: any): V1IngressClass;
export declare function V1IngressClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressClass;
export declare function V1IngressClassToJSON(value?: V1IngressClass | null): any;
