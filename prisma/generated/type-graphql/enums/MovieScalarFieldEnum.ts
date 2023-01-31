import * as TypeGraphQL from "type-graphql";

export enum MovieScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  director = "director",
  year = "year"
}
TypeGraphQL.registerEnumType(MovieScalarFieldEnum, {
  name: "MovieScalarFieldEnum",
  description: undefined,
});
