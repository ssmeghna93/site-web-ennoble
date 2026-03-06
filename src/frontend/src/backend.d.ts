import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    improvement: string;
    city: string;
    fullName: string;
    email: string;
    currentWebsite?: string;
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getSubmissionCount(): Promise<bigint>;
    submitEnquiry(fullName: string, email: string, city: string, currentWebsite: string | null, improvement: string): Promise<void>;
}
