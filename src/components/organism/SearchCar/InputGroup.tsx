import React, { ReactNode } from 'react';
import Icon from '@/components/atom/Icon';
import styles from './style/input_group.module.css';

interface InputGroupProps {
  id: string;
  labelText: string;
  children: ReactNode;
  icon: string;
}

export default function InputGroup(props: InputGroupProps) {
  const {
    id, labelText, children, icon,
  } = props;

  return (
    <div className="input-group d-flex flex-column ai-center">
      <label htmlFor={id} className={styles.label}>{labelText}</label>
      <div className="inline-input-icon d-flex jc-start ai-center">
        <Icon icon={icon} classItem={styles.inputIcon} />
        { children }
      </div>
    </div>
  );
}
