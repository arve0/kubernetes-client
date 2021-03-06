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
import { EventsV1Event, V1ListMeta } from './';
/**
 * EventList is a list of Event objects.
 * @export
 * @interface EventsV1EventList
 */
export interface EventsV1EventList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof EventsV1EventList
     */
    apiVersion?: string;
    /**
     * items is a list of schema objects.
     * @type {Array<EventsV1Event>}
     * @memberof EventsV1EventList
     */
    items: Array<EventsV1Event>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof EventsV1EventList
     */
    kind?: string;
    /**
     *
     * @type {V1ListMeta}
     * @memberof EventsV1EventList
     */
    metadata?: V1ListMeta;
}
export declare function EventsV1EventListFromJSON(json: any): EventsV1EventList;
export declare function EventsV1EventListFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsV1EventList;
export declare function EventsV1EventListToJSON(value?: EventsV1EventList | null): any;
