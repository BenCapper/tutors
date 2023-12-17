export type Topic = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    units: Unit[];
  };

export type FormData = {
    courseName: string;
    courseDescription: string;
    topics: Topic[];
  };

export type Unit = {
    id: number;
    title: string;
    type: string;
    resources: Resource[];
  };

export type Resource = {
    id: number;
    type: string;
}