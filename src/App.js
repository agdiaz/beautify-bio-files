import React from 'react';
import { Layout, Space, Card, Col, Row, Descriptions, Table, Tree, Statistic } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  DownOutlined,
  ReconciliationOutlined,
} from '@ant-design/icons';
import './App.css';

const { Header, Content, Footer } = Layout;
const { TreeNode } = Tree;

const columns = [
  {
    title: 'Chromosome',
    dataIndex: 'chrom',
    key: 'chrom',
  },
  {
    title: 'Position',
    dataIndex: 'pos',
    key: 'pos',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Reference',
    dataIndex: 'ref',
    key: 'ref',
  },
  {
    title: 'Alteration',
    dataIndex: 'alt',
    key: 'alt',
  },
  {
    title: 'Quality',
    dataIndex: 'qual',
    key: 'qual',
  },
  {
    title: 'Filter',
    dataIndex: 'filter',
    key: 'filter',
  },
  {
    title: 'Info',
    dataIndex: 'info',
    key: 'info',
  },
  {
    title: 'Format',
    dataIndex: 'format',
    key: 'format',
  },
];

const data = [
  {
    key: '1',
    chrom: 20,
    pos: 14370,
    id: 'rs6054257',
    ref: 'G',
    alt: 'A',
    qual: 29,
    filter: 'PASS',
    info: 'NS=3;DP=14;AF=0.5;DB;H2',
    format: 'GT:GQ:DP:HQ',
  },
  {
    key: '2',
    chrom: 20,
    pos: 17330,
    id: '.',
    ref: 'T',
    alt: 'A',
    qual: 3,
    filter: 'q10',
    info: 'NS=3;DP=11;AF=0.017',
    format: 'GT:GQ:DP:HQ',
  },
  {
    key: '3',
    chrom: 20,
    pos: 14370,
    id: 'rs6054257',
    ref: 'G',
    alt: 'A',
    qual: 29,
    filter: 'PASS',
    info: 'NS=3;DP=14;AF=0.5;DB;H2',
    format: ' GT:GQ:DP:HQ',
  },
];

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className="site-layout" style={{ minHeight: '100vh' }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
        <h1>Beautify VCF</h1>
        </Header>
        <Content style={{ margin: '4px 16px' }}>
          <div className="site-card-wrapper">
            <Space direction="vertical">
              <Row gutter={16}>
                <Col span={16}>
                  <Card title="Basic" bordered={false}>
                    <Descriptions layout="vertical">
                      <Descriptions.Item label="File format">VCFv4.2</Descriptions.Item>
                      <Descriptions.Item label="File date">20090805</Descriptions.Item>
                      <Descriptions.Item label="Source">"myImputationProgramV3.1"</Descriptions.Item>
                      <Descriptions.Item label="Reference" span={2}>file:///seq/references/1000GenomesPilot-NCBI36.fasta</Descriptions.Item>
                      <Descriptions.Item label="Phasing">partial</Descriptions.Item>
                      <Descriptions.Item label="Contig" span={2}>{'<ID=20,length=62435964,assembly=B36,md5=f126cdf8a6e0c7f379d618ff66beb2da,species="Homo sapiens",taxonomy=x'}></Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Statistics" bordered={false}>
                    <Statistic title="Count" value={data.length} prefix={<FileOutlined />} />
                    <Statistic title="Samples" value={3} prefix={<ReconciliationOutlined />} />
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Info" bordered={false}>
                    <Tree
                      showLine
                      switcherIcon={<DownOutlined />}
                      defaultExpandedKeys={[]}
                      onSelect={this.onSelect}
                    >
                      <TreeNode title="NS" key="NS">
                        <TreeNode title="Number=1" key="NS-N" />
                        <TreeNode title="Type=Integer" key="NS-T" />
                        <TreeNode title="Description=Number of Samples With Data" key="NS-D" />
                      </TreeNode>
                      <TreeNode title="DP" key="DP">
                        <TreeNode title="Number=1" key="DP-N" />
                        <TreeNode title="Type=Integer" key="DP-T" />
                        <TreeNode title="Description=Number of Samples With Data" key="DP-D" />
                      </TreeNode>
                      <TreeNode title="AF" key="AF">
                        <TreeNode title="Number=1" key="AF-N" />
                        <TreeNode title="Type=Integer" key="AF-T" />
                        <TreeNode title="Description=Number of Samples With Data" key="AF-D" />
                      </TreeNode>
                      <TreeNode title="AA" key="AA">
                        <TreeNode title="Number=1" key="AA-N" />
                        <TreeNode title="Type=Integer" key="AA-T" />
                        <TreeNode title="Description=Number of Samples With Data" key="AA-d" />
                      </TreeNode>
                    </Tree>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Filter" bordered={false}>
                    <Tree
                        showLine
                        switcherIcon={<DownOutlined />}
                        defaultExpandedKeys={[]}
                        onSelect={this.onSelect}
                      >
                        <TreeNode title="q10" key="q10">
                          <TreeNode title="Number=1" key="q10-N" />
                        </TreeNode>
                        <TreeNode title="s50" key="s50">
                          <TreeNode title="Number=1" key="s50-N" />
                        </TreeNode>
                      </Tree>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Format" bordered={false}>
                    <Tree
                        showLine
                        switcherIcon={<DownOutlined />}
                        defaultExpandedKeys={[]}
                        onSelect={this.onSelect}
                      >
                        <TreeNode title="GT" key="NS">
                          <TreeNode title="Number=1" key="GT-N" />
                        </TreeNode>
                        <TreeNode title="GQ" key="DP">
                          <TreeNode title="Number=1" key="GQ-N" />
                        </TreeNode>
                        <TreeNode title="DP" key="DP">
                          <TreeNode title="Number=1" key="DP-N" />
                        </TreeNode>
                        <TreeNode title="HQ" key="DP">
                          <TreeNode title="Number=1" key="HQ-N" />
                        </TreeNode>
                      </Tree>
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
              <Col span={24}>
                <Card title="Variants">
                  <Table columns={columns} dataSource={data}></Table>
                </Card>
              </Col>
            </Row>
            </Space>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@agdiaz - 2020</Footer>
      </Layout>
    )
  };
}

export default App;