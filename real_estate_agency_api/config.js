const env = process.env.NODE_ENV || 'dev';

const dev = {
  PORT: 8181,
  DB_URI: 'mongodb://localhost:27017/real_estate_agency',
  SECRECT : 'kJuTbzu7/t51cqA9UApoXF2RxhpQYkiGCMuHNBoy9gS565O8AHQGljRo+mTT9qcyJ/jdgGXIRaMq01gzqpiSmDsZ8+Hgia0igg7RSzo0R5x2hekMwUkpMVoTQgmcnOz2hFX3WcPEB3lDWlv6er4a8NiZskIaUvMsz7WQHgGuZ2Oqdz6BmkduT9j8KLzcLfi30h1vjI8O7KU62FbgrjFSU2ZnoSOnoRKeiE7ltGS8BRPAr8k8hclDIxPj9aObuCKX0ASqjl+llO+W02FM8CnUIvE175VuzI4eI8Z9EtHQhqBxCdBB8Dqi5dmATQH/4jQkgZeXUlm1VLf9g+sOJ4KJOg==',
  AWS_SECRET_ACCESS_KEY: 'nVla+DNyq5OrDRtQFddVSg+ffEHPabPjXw+i3xuz',
  AWS_ACCESS_KEY_ID: 'AKIAJ6LE2B5IQPFJ7WUA',
  AWS_UPLOAD_BUCKET: 'nod.realestateagency'
}

const test = {
  PORT: 8282,
  DB_URI: 'mongodb://localhost:27017/real_estate_agency_test',
  SECRECT : 'kJuTbzu7/t51cqA9UApoXF2RxhpQYkiGCMuHNBoy9gS565O8AHQGljRo+mTT9qcyJ/jdgGXIRaMq01gzqpiSmDsZ8+Hgia0igg7RSzo0R5x2hekMwUkpMVoTQgmcnOz2hFX3WcPEB3lDWlv6er4a8NiZskIaUvMsz7WQHgGuZ2Oqdz6BmkduT9j8KLzcLfi30h1vjI8O7KU62FbgrjFSU2ZnoSOnoRKeiE7ltGS8BRPAr8k8hclDIxPj9aObuCKX0ASqjl+llO+W02FM8CnUIvE175VuzI4eI8Z9EtHQhqBxCdBB8Dqi5dmATQH/4jQkgZeXUlm1VLf9g+sOJ4KJOg==',
  AWS_SECRET_ACCESS_KEY: 'nVla+DNyq5OrDRtQFddVSg+ffEHPabPjXw+i3xuz',
  AWS_ACCESS_KEY_ID: 'AKIAJ6LE2B5IQPFJ7WUA',
  AWS_UPLOAD_BUCKET: 'nod.realestateagency'
}


const config = {
  dev,
  test
 };
 
 module.exports = config[env];