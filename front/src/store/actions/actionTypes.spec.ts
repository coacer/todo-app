import _ from "lodash";
import { ActionTypes as TodosActionTypes } from "./todos";
import { ActionTypes as LoadActionTypes } from "./load";

it('ActionTypes is not duplicates', () => {
  const actionTypes: string[] = [
    ..._.values(TodosActionTypes),
    ..._.values(LoadActionTypes),
  ];

  expect(actionTypes).toEqual(_.uniq(actionTypes));
});
