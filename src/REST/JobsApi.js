// const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = 'https://adsrevenue.co'
const PostData = {

  postdetails(urls,data) {
    const url = urls;
    return this.requestPostCall(baseUrl + url,data);
  },
  updatedetails(urls,data) {
    const url = urls;
    return this.requestPostCall(baseUrl + url,data);
  },
  getList(urls) {
    const url = urls;
    return this.requestGetCall(baseUrl + url);
  },
  deleteDetails(urls,data) {
    const url = urls;
    return this.requestDeleteCall(baseUrl + url,data);
  },
  requestPostCall(url,data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        return err;
      });
  },
  requestGetCall(url,data) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        return err;
      });
  },
  requestDeleteCall(url,data) {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        return err;
      });
  }
};

export default PostData;


