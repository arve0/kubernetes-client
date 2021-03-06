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
import { DiscoveryV1EndpointPort, V1Endpoint, V1ObjectMeta } from './';
/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 * @export
 * @interface V1EndpointSlice
 */
export interface V1EndpointSlice {
    /**
     * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
     * @type {string}
     * @memberof V1EndpointSlice
     */
    addressType: string;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1EndpointSlice
     */
    apiVersion?: string;
    /**
     * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
     * @type {Array<V1Endpoint>}
     * @memberof V1EndpointSlice
     */
    endpoints: Array<V1Endpoint>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1EndpointSlice
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1EndpointSlice
     */
    metadata?: V1ObjectMeta;
    /**
     * ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports.
     * @type {Array<DiscoveryV1EndpointPort>}
     * @memberof V1EndpointSlice
     */
    ports?: Array<DiscoveryV1EndpointPort>;
}
export declare function V1EndpointSliceFromJSON(json: any): V1EndpointSlice;
export declare function V1EndpointSliceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EndpointSlice;
export declare function V1EndpointSliceToJSON(value?: V1EndpointSlice | null): any;
