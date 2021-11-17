import axios from 'axios';

const Check = () => {

  async function submit() {
    let data = {
      account: 'a1',
      evmaddress: 'a2',
      nearaddress: 'a3',
      solwallet: 'a4',
    };
    console.log(data);
    await axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: 'https://101.32.184.176:9090/FISH/updateBindingAccount',
      data: JSON.stringify(data),
    }).then(function(response) {
      console.log('success{}', response);
    })
      .catch(function(error) {
        console.log('error{}', error);
      });
  }

  return (
    <div>
      <button onClick={submit}>aaaaaa</button>
    </div>
  );
};
export default Check;
