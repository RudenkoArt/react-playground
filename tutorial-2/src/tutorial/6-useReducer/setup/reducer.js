export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added',
      };
    }

    case 'REMOVE_ITEM': {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );

      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item removed',
      };
    }

    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'please enter value',
      };

    case 'CLOSE_MODAL': {
      return { ...state, isModalOpen: false };
    }

    default:
      throw new Error('no matching action type');
  }
};
