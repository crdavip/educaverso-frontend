import { Image } from "./image.interface";
import { UserDetail } from "./userdetail.interface";

export interface Blog {
  documentId:  string;
  title:       string;
  duration:    number;
  description: string;
  content:     Content[];
  createdAt:   Date;
  image:       Image;
  userDetail:  UserDetail;
  slug: string;
}

export interface Content {
  type:     ContentType;
  children: Child[];
  level?:   number;
  format?:  string;
}

export interface Child {
  text?:     string;
  type:      ChildType;
  bold?:     boolean;
  children?: Child[];
}

export enum ChildType {
  ListItem = "list-item",
  Text = "text",
}

export enum ContentType {
  Heading = "heading",
  List = "list",
  Paragraph = "paragraph",
}