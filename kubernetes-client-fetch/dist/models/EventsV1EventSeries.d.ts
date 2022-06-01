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
/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations.
 * @export
 * @interface EventsV1EventSeries
 */
export interface EventsV1EventSeries {
    /**
     * count is the number of occurrences in this series up to the last heartbeat time.
     * @type {number}
     * @memberof EventsV1EventSeries
     */
    count: number;
    /**
     * lastObservedTime is the time when last Event from the series was seen before last heartbeat.
     * @type {Date}
     * @memberof EventsV1EventSeries
     */
    lastObservedTime: Date;
}
export declare function EventsV1EventSeriesFromJSON(json: any): EventsV1EventSeries;
export declare function EventsV1EventSeriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsV1EventSeries;
export declare function EventsV1EventSeriesToJSON(value?: EventsV1EventSeries | null): any;
