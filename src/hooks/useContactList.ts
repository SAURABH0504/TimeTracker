import { useEffect, useMemo} from 'react';
import {Contact} from 'expo-contacts';
import {sortContacts} from '../utils';
import { getAllContactsFromUserPhoneBook } from '../service/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFavouriteId } from '../store/slices/timerSlice';
import { setContacts } from '../store/slices/projectsSlice';

const useContactList = () => {
  const contacts = useSelector((state: RootState) => state.contact.contacts);
  const dispatch = useDispatch();
  const favouriteId = useSelector((state: RootState) => state.favourite.favouriteId)

  useMemo(() => {
    contacts?.filter((item: Contact) => {
      if(favouriteId === item.id){
       dispatch(setFavouriteId(item.id));
      }
    });
    dispatch(setContacts(contacts));
  }, [favouriteId])

  useEffect(() => {
    getAllContactsFromUserPhoneBook((data: Contact[]) => {
      dispatch(setContacts(sortContacts(data)));
    });
  }, []);

  return [contacts, favouriteId];
};

export default useContactList;