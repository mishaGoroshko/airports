import {ChangeEvent, useState} from 'react';

interface IReturnUseInput {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void

}

export const useInput = (initialValue = ''): IReturnUseInput => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return {value, onChange}
}