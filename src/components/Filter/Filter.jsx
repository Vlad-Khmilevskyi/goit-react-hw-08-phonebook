import { Input, Label, Text } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      <Text> Find contacts by name </Text>
      <Input
        type="text"
        onChange={event =>
          dispatch(filteredContacts(event.target.value.trim()))
        }
      />
    </Label>
  );
};
