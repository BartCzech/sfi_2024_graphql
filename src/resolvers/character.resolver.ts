import { Query, Resolver } from "type-graphql";
import Character, { GenderEnum } from "../schema/character.schema";

@Resolver()
class CharacterResolver {
    @Query(() => [Character])
    characters() {
        return [
            {
                name: "Luke Skywalker",
                height: "172",
                gender: GenderEnum.MALE,
            },
            {
                name: "Darth Vader",
                height: "202",
                gender: GenderEnum.MALE,
            },
        ];
    }
}

export default CharacterResolver;