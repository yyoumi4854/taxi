// react, react-native
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Button} from 'react-native';

// library
import Realm from 'realm';

// assets, utils, realm
import {TestSchema} from '../realm/schema.ts';

const More = () => {
  const [id, setId] = useState(0);

  const realm = useRef<Realm>();

  useEffect(() => {
    //realmDB 오픈
    openLocalDB();

    return () => {
      realm.current?.close();
      console.log('realmDB 닫기!!!');
    };
  }, []);

  const openLocalDB = async () => {
    realm.current = await Realm.open({schema: [TestSchema]});
    console.log('realmDB 오픈!!!');
    readAllDB();
  };

  const createDB = () => {
    const newData = {
      _id: id,
      name: '이름',
      age: 10,
    };
    setId(prev => prev + 1);

    realm.current?.write(() => {
      realm.current?.create('Test', newData);
    });

    console.log('데이터가 생성되었습니다.');
    readAllDB();
  };

  const readAllDB = () => {
    const data = realm.current?.objects('Test');

    if (data) {
      console.log('현재 데이터:', data);
    } else {
      console.log('데이터가 없습니다.');
    }
  };

  // _id = 1를 가진 데이터 name='새로운 이름'으로 바꾸기
  const updateDB = () => {
    // 교체할 데이터 : _id = 1을 가진 데이터 찾기
    const data = realm.current?.objects('Test').filtered('_id = 1')[0];

    if (data) {
      realm.current?.write(() => {
        data.name = '새로운 이름';
      });

      readAllDB();
    }
  };

  const deleteAllDB = () => {
    const data = realm.current?.objects('Test');

    realm.current?.write(() => {
      realm.current?.delete(data);
    });
    console.log('데이터가 전부 삭제되었습니다.');
    readAllDB();
  };

  // _id = 1를 가진 데이터만 삭제
  const deleteDB = () => {
    const data = realm.current?.objects('Test').filtered('_id = 1')[0];

    realm.current?.write(() => {
      realm.current?.delete(data);
    });
    console.log('_id = 1를 가진 데이터가 전부 삭제되었습니다.');
    readAllDB();
  };

  return (
    <View>
      <Text>더보기 스크린</Text>

      <Button onPress={createDB} title={'데이터 추가'} />

      <Button
        onPress={updateDB}
        title={'_id = 1를 가진 데이터 name="새로운 이름"으로 업데이트'}
      />

      <Button onPress={deleteAllDB} title={'데이터 전체 삭제'} />

      <Button onPress={deleteDB} title={'_id = 1를 가진 데이터만 삭제'} />
    </View>
  );
};

export default More;
