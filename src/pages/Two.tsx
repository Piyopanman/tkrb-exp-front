import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getToukenList } from "../api/getToukenList";
import { History } from "history";

type FormData = {
  saniwa: string;
  touken1: string;
  level1: number;
  touken2: string;
  level2: number;
};

type ToukenList = {
  key: number;
  toukenID: number;
  toukenName: string;
};

interface Props {
  history: History;
}

export const Two: React.FC<Props> = (props) => {
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    props.history.push(
      `/two-result/?saniwa=${data.saniwa}&touken1=${data.touken1}&level1=${data.level1}&touken2=${data.touken2}&level2=${data.level2}`
    );
  };

  const initialState: Array<ToukenList> = [
    {
      key: 0,
      toukenID: 0,
      toukenName: "",
    },
  ];

  const [toukenList, setToukenList] = useState<ToukenList[]>(initialState);

  useEffect(() => {
    getToukenList().then((t) => {
      setToukenList(t);
    });
  }, []);

  let levelList: number[] = [];
  for (var i = 1; i <= 99; i++) {
    levelList.push(i);
  }

  return (
    <div className="input-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>審神者名</h1>
        <input
          name="saniwa"
          placeholder="名無しの審神者"
          ref={register({ required: true, maxLength: 20 })}
        />
        {errors.saniwa && (
          <p className="error">正しく審神者名を入力してください</p>
        )}

        <h1>刀剣情報 其の一</h1>
        <h2>刀剣名</h2>
        <select name="touken1" ref={register({ valueAsNumber: true })}>
          {toukenList.map((t) => (
            <option value={t.toukenID} key={t.key}>
              {t.toukenName}
            </option>
          ))}
        </select>
        <h2>練度</h2>
        <select
          name="level1"
          ref={register({ required: true, valueAsNumber: true })}
        >
          {levelList.map((l) => (
            <option value={l} key={l}>
              {l}
            </option>
          ))}
        </select>

        <h1>刀剣情報 其の二</h1>
        <h2>刀剣名</h2>
        <select name="touken2" ref={register({ valueAsNumber: true })}>
          {toukenList.map((t) => (
            <option value={t.toukenID} key={t.key}>
              {t.toukenName}
            </option>
          ))}
        </select>
        <h2>練度</h2>
        <select
          name="level2"
          ref={register({ required: true, valueAsNumber: true })}
        >
          {levelList.map((l) => (
            <option value={l} key={l}>
              {l}
            </option>
          ))}
        </select>

        <br />
        <input
          className="submit-btn"
          type="submit"
          value="調査"
          formAction="/home"
        />
        <br />
      </form>
    </div>
  );
};
