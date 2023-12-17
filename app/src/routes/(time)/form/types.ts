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
    topicName: string;
    unitName: string;
    resourceName: string;
  };

export type Unit = {
    id: number;
    title: string;
    type: string;
    resources: [];
  };