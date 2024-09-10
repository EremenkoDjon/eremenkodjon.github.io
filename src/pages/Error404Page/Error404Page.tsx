import './Error404Page.css';

import type { FC } from 'react';

import { Page } from '../../components/Page';

import { Result } from 'antd';

export const Error404: FC = () => {
  return (
    <Page title="Error 404">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </Page>
  );
};
