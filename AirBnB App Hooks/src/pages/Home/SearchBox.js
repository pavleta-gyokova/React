import './SearchBox.css';
import useControlledInput from '../../customHooks/useControlledInput';


function SearchBox(props) {

    const where = useControlledInput('');
    const checkIn = useControlledInput('');
    const checkOut = useControlledInput('');
    const guest = useControlledInput(0);

    const submitSearch = (event) => {
        event.preventDefault();
        props.history.push(`/search/${where.value}`);
    }

    return (
        <div className='home-search-box col m4'>
            <h1>Book unique places to stay and things to do.</h1>
            <form onSubmit={submitSearch} className='search-box-form'>
                <div className='col m12'>
                    <div className='form-label'>Where</div>
                    <div className='input-field' id='where'>
                        <input className='browser-default' placeholder='Anywhere' {...where} type='text' />
                    </div>
                </div>

                <div className='col m6'>
                    <div className='form-label'>CHECK-IN</div>
                    <div className='input-field' id='check-in'>
                        <input placeholder='Anywhere' {...checkIn} type='date' />
                    </div>
                </div>

                <div className='col m6'>
                    <div className='form-label'>CHECK-OUT</div>
                    <div className='input-field' id='check-out'>
                        <input placeholder='Anywhere' {...checkOut} type='date' />
                    </div>
                </div>

                <div className='col m12'>
                    <div className='form-label'>Guests</div>
                    <div className='input-field' id='guest'>
                        <input className='browser-default' placeholder='Enter number of guests' {...guest} type='number' />
                    </div>
                </div>

                <div className='col m12 submit-btn'>
                    <div className='input-field' id='submit-btn'>
                        <input className='btn-large waves-effect waves-light red accent-2' type='submit' />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SearchBox;