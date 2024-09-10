import { Input } from 'antd';

interface NumericInputProps {
    className: string;
    suffix: string;
    value: string;
    onChange: (value: string) => void;
}

export const NumericInput = (props: NumericInputProps) => {
    const { value, onChange } = props;
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue } = e.target;
      const reg = /^-?\d*(\.\d*)?$/;
      if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
        onChange(inputValue);
      }
    };
  
    // '.' at the end or only '-' in the input box.
    const handleBlur = () => {
      let valueTemp = value;
      if (value.charAt(value.length - 1) === '.' || value === '-') {
        valueTemp = value.slice(0, -1);
      }
      onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };
  
    return (
        <Input
          {...props}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Input a number"
          maxLength={16}
          inputMode='numeric'
        />
    );
  };

  
import { Select, Spin } from 'antd';
import type { SelectProps } from 'antd';
import React, { useMemo, useRef, useState, //useEffect 
} from 'react';
import debounce from 'lodash/debounce';
//import { debounce } from "lodash";
import type { UserValue } from '../components/Api';
import { ApiContextType, ApiStatus, //fetchUserList2
} from '../components/Api';

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchContext: ApiContextType | null;
  debounceTimeout?: number;
}

export function DebounceSelect<
  ValueType extends {
    key?: string;
    label: React.ReactNode;
    value: string | number;
  } = any
>({
  fetchContext,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<UserValue[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      //const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchContext?.method("getUserFriends", {user: value});

      console.log("debounceFetcher", value);
      
      //fetchOptions(value);

      //if(fetchOptions != null)
      //{
      //  fetchContext;
      //  //setOptions(fetchOptions(value));
      //}

      //fetchOptions(value).then((newOptions) => {
      //
      //  console.log("debounceFetcher", newOptions);
      //
      ////  if (fetchId !== fetchRef.current) {
      ////    // for fetch callback order
      ////    return;
      ////  }
      ////
      ////  setOptions(newOptions);
      ////  setFetching(false);
      //});
    };

    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout]);

  useMemo(() => {
    if(fetchContext?.getStatus != ApiStatus.Loading)
    {
      setFetching(false);
    }

    if(fetchContext?.getStatus == ApiStatus.Success)
    {
      //setOptions(fetchContext?.getData);
      setOptions(fetchContext?.getUserFriends);
    }

  }, [fetchContext?.getStatus]);

  return (
    <Select
      labelInValue
      filterOption={false}
      maxCount={1}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}