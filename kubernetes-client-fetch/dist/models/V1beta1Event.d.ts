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
import { V1EventSource, V1ObjectMeta, V1ObjectReference, V1beta1EventSeries } from './';
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 * @export
 * @interface V1beta1Event
 */
export interface V1beta1Event {
    /**
     * action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field can have at most 128 characters.
     * @type {string}
     * @memberof V1beta1Event
     */
    action?: string;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1Event
     */
    apiVersion?: string;
    /**
     * deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
     * @type {number}
     * @memberof V1beta1Event
     */
    deprecatedCount?: number;
    /**
     * deprecatedFirstTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
     * @type {Date}
     * @memberof V1beta1Event
     */
    deprecatedFirstTimestamp?: Date;
    /**
     * deprecatedLastTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
     * @type {Date}
     * @memberof V1beta1Event
     */
    deprecatedLastTimestamp?: Date;
    /**
     *
     * @type {V1EventSource}
     * @memberof V1beta1Event
     */
    deprecatedSource?: V1EventSource;
    /**
     * eventTime is the time when this Event was first observed. It is required.
     * @type {Date}
     * @memberof V1beta1Event
     */
    eventTime: Date;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1Event
     */
    kind?: string;
    /**
     *
     * @type {V1ObjectMeta}
     * @memberof V1beta1Event
     */
    metadata?: V1ObjectMeta;
    /**
     * note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
     * @type {string}
     * @memberof V1beta1Event
     */
    note?: string;
    /**
     * reason is why the action was taken. It is human-readable. This field can have at most 128 characters.
     * @type {string}
     * @memberof V1beta1Event
     */
    reason?: string;
    /**
     *
     * @type {V1ObjectReference}
     * @memberof V1beta1Event
     */
    regarding?: V1ObjectReference;
    /**
     *
     * @type {V1ObjectReference}
     * @memberof V1beta1Event
     */
    related?: V1ObjectReference;
    /**
     * reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
     * @type {string}
     * @memberof V1beta1Event
     */
    reportingController?: string;
    /**
     * reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
     * @type {string}
     * @memberof V1beta1Event
     */
    reportingInstance?: string;
    /**
     *
     * @type {V1beta1EventSeries}
     * @memberof V1beta1Event
     */
    series?: V1beta1EventSeries;
    /**
     * type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable.
     * @type {string}
     * @memberof V1beta1Event
     */
    type?: string;
}
export declare function V1beta1EventFromJSON(json: any): V1beta1Event;
export declare function V1beta1EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1Event;
export declare function V1beta1EventToJSON(value?: V1beta1Event | null): any;
