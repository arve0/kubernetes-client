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
 *
 * @export
 * @interface V1GRPCAction
 */
export interface V1GRPCAction {
    /**
     * Port number of the gRPC service. Number must be in the range 1 to 65535.
     * @type {number}
     * @memberof V1GRPCAction
     */
    port: number;
    /**
     * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
     *
     * If this is not specified, the default behavior is defined by gRPC.
     * @type {string}
     * @memberof V1GRPCAction
     */
    service?: string;
}
export declare function V1GRPCActionFromJSON(json: any): V1GRPCAction;
export declare function V1GRPCActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GRPCAction;
export declare function V1GRPCActionToJSON(value?: V1GRPCAction | null): any;
