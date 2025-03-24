import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, message, Image, Tag, Card, Divider } from 'antd';
import { EyeOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

const VerificationApprovals = () => {
    const [verifications, setVerifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedVerification, setSelectedVerification] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        fetchVerifications();
    }, []);

    const fetchVerifications = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/admin/verifications');
            const data = await response.json();
            if (data.status === 'ok') {
                setVerifications(data.verifications);
            }
        } catch (error) {
            message.error('Failed to fetch verifications');
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (email) => {
        try {
            const response = await fetch(`http://localhost:5000/admin/verifications/approve`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            
            const data = await response.json();
            if (data.status === 'ok') {
                message.success('Verification approved successfully');
                fetchVerifications();
            }
        } catch (error) {
            message.error('Error approving verification');
        }
    };

    const handleReject = async (email) => {
        try {
            const response = await fetch(`http://localhost:5000/admin/verifications/reject`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            
            const data = await response.json();
            if (data.status === 'ok') {
                message.success('Verification rejected successfully');
                fetchVerifications();
            }
        } catch (error) {
            message.error('Error rejecting verification');
        }
    };

    const columns = [
        {
            title: 'User',
            dataIndex: 'email',
            key: 'email',
            render: (email, record) => (
                <div>
                    <div>{email}</div>
                    <div style={{ fontSize: 12, color: '#888' }}>
                        {record.verificationInfo.phoneNumber}
                    </div>
                </div>
            ),
        },
        {
            title: 'Status',
            dataIndex: ['verificationInfo', 'verified'],
            key: 'status',
            render: (verified) => (
                <Tag 
                    color={verified ? 'green' : 'orange'} 
                    icon={verified ? <CheckOutlined /> : null}
                >
                    {verified ? 'Verified' : 'Pending'}
                </Tag>
            ),
        },
        {
            title: 'ID Information',
            key: 'ids',
            render: (_, record) => (
                <div style={{ lineHeight: 1.5 }}>
                    <div><strong>NID:</strong> {record.verificationInfo.nidNumber}</div>
                    <div><strong>License:</strong> {record.verificationInfo.drivingLicense}</div>
                    <div><strong>Passport:</strong> {record.verificationInfo.passportId}</div>
                </div>
            ),
        },
        {
            title: 'Verification Image',
            key: 'image',
            render: (_, record) => (
                record.verificationInfo.documentUrl ? (
                    <Button 
                        type="link" 
                        icon={<EyeOutlined />}
                        onClick={() => {
                            setSelectedVerification(record);
                            setIsModalVisible(true);
                        }}
                    >
                        View Image
                    </Button>
                ) : (
                    <Tag color="red">No image</Tag>
                )
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '8px' }}>
                    {!record.verificationInfo.verified && (
                        <>
                            <Button 
                                type="primary" 
                                icon={<CheckOutlined />}
                                onClick={() => handleApprove(record.email)}
                                disabled={!record.verificationInfo.documentUrl}
                            >
                                Approve
                            </Button>
                            <Button 
                                danger 
                                icon={<CloseOutlined />}
                                onClick={() => handleReject(record.email)}
                            >
                                Reject
                            </Button>
                        </>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h1 style={{ margin: 0 }}>User Verifications</h1>
                <Button onClick={fetchVerifications} loading={loading}>
                    Refresh
                </Button>
            </div>
            
            <Table 
                columns={columns}
                dataSource={verifications}
                rowKey="email"
                loading={loading}
                bordered
                pagination={{ pageSize: 10 }}
                scroll={{ x: true }}
            />

            {/* Image Preview Modal */}
            <Modal
                title={`Verification Image - ${selectedVerification?.email || ''}`}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
                width="80%"
                bodyStyle={{ padding: 0 }}
            >
                {selectedVerification?.verificationInfo?.documentUrl && (
                    <div style={{ display: 'flex', height: '70vh' }}>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <Image
                                width="100%"
                                height="100%"
                                style={{ objectFit: 'contain' }}
                                src={selectedVerification.verificationInfo.documentUrl}
                                alt="Verification document"
                                preview={{
                                    visible: false, // We'll handle our own preview
                                }}
                            />
                        </div>
                        <div style={{ width: 300, padding: '16px', borderLeft: '1px solid #f0f0f0' }}>
                            <Card title="User Information" size="small">
                                <p><strong>Email:</strong> {selectedVerification.email}</p>
                                <p><strong>Phone:</strong> {selectedVerification.verificationInfo.phoneNumber}</p>
                                <Divider />
                                <p><strong>NID:</strong> {selectedVerification.verificationInfo.nidNumber}</p>
                                <p><strong>Driving License:</strong> {selectedVerification.verificationInfo.drivingLicense}</p>
                                <p><strong>Passport ID:</strong> {selectedVerification.verificationInfo.passportId}</p>
                                <Divider />
                                <p><strong>Submitted:</strong> {new Date(selectedVerification.verificationInfo.submittedAt).toLocaleString()}</p>
                                <p>
                                    <strong>Status:</strong> 
                                    <Tag 
                                        color={selectedVerification.verificationInfo.verified ? 'green' : 'orange'} 
                                        style={{ marginLeft: '8px' }}
                                    >
                                        {selectedVerification.verificationInfo.verified ? 'Verified' : 'Pending'}
                                    </Tag>
                                </p>
                            </Card>
                            <div className='flex-col' style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                                {!selectedVerification.verificationInfo.verified && (
                                    <>
                                        <Button 
                                            type="primary" 
                                            icon={<CheckOutlined />}
                                            onClick={() => {
                                                handleApprove(selectedVerification.email);
                                                setIsModalVisible(false);
                                            }}
                                            block
                                        >
                                            Approve Verification
                                        </Button>
                                        <Button 
                                            danger 
                                            icon={<CloseOutlined />}
                                            onClick={() => {
                                                handleReject(selectedVerification.email);
                                                setIsModalVisible(false);
                                            }}
                                            block
                                        >
                                            Reject Verification
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default VerificationApprovals;