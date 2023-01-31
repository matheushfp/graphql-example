import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieWhereInput", {
  isAbstract: true
})
export class MovieWhereInput {
  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  AND?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  OR?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  NOT?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  director?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  year?: IntFilter | undefined;
}
