import React from 'react';
import Add from './Add';

export default function View({
  id,
}: {
  id: number;
}) {
  return <Add disabled={true} {...{ id, handleSuccess: () => {} }} />;
}
