 import css from './Filter.module.css'
 import { useDispatch, useSelector } from 'react-redux';
 import { contactFilter } from 'redux/contactSlice';
 import { getFilter } from 'redux/contactSelectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

const onChange = e => {
  dispatch(contactFilter(e.currentTarget.value));
};

  return (
    <div className={css.container}>
      <p className={css.text}>  
         Find contacts by name
      </p>  
      <input 
      type="text"  
      value={filter} 
      onChange={onChange}
      className={css.input} />
    </div>
  );
}


