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
import { V1beta1FlowDistinguisherMethod, V1beta1PolicyRulesWithSubjects, V1beta1PriorityLevelConfigurationReference } from './';
/**
 * FlowSchemaSpec describes how the FlowSchema's specification looks like.
 * @export
 * @interface V1beta1FlowSchemaSpec
 */
export interface V1beta1FlowSchemaSpec {
    /**
     *
     * @type {V1beta1FlowDistinguisherMethod}
     * @memberof V1beta1FlowSchemaSpec
     */
    distinguisherMethod?: V1beta1FlowDistinguisherMethod;
    /**
     * `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
     * @type {number}
     * @memberof V1beta1FlowSchemaSpec
     */
    matchingPrecedence?: number;
    /**
     *
     * @type {V1beta1PriorityLevelConfigurationReference}
     * @memberof V1beta1FlowSchemaSpec
     */
    priorityLevelConfiguration: V1beta1PriorityLevelConfigurationReference;
    /**
     * `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
     * @type {Array<V1beta1PolicyRulesWithSubjects>}
     * @memberof V1beta1FlowSchemaSpec
     */
    rules?: Array<V1beta1PolicyRulesWithSubjects>;
}
export declare function V1beta1FlowSchemaSpecFromJSON(json: any): V1beta1FlowSchemaSpec;
export declare function V1beta1FlowSchemaSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1FlowSchemaSpec;
export declare function V1beta1FlowSchemaSpecToJSON(value?: V1beta1FlowSchemaSpec | null): any;
