export class FailureDetail {
    failure_id: number;
    failure_name: string;
    failure_description: string;
    failure_datetime: string;
    failure_machineid: number;
    failure_status: boolean;
    failure_documentation: string;
    failure_priority: number;
}

export class MachineDetail {
    machine_id: number;
    machine_name: string;
}

